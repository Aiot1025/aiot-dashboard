const nowTempData = document.getElementById("nowTempData");
const nowHumData = document.getElementById("nowHumData");

function setNowDHT11Data() {
    let request = new XMLHttpRequest();
    request.open("POST", window.location.origin + "/data/getNowDHT11Data", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({name: "getNowDHT11Data"}));

    request.addEventListener("load", () => {
        let myJson = JSON.parse(request.responseText);
        console.log("Heroku Msg[Get Now DHT11 Data]:");
        console.log(myJson);

        try {
            let nowTime = new Date();
            let dataTime = new Date(myJson["Year"], myJson["Month"] - 1, myJson["Day"], myJson["Hour"], myJson["Min"]);
            let time = nowTime - dataTime;
            console.log("Get Now DHT11 Data[Time]:", time);
            if(time > 180000){
                nowTempData.innerText = "No Data";
                nowHumData.innerText = "No Data";
            } else {
                nowTempData.innerText = `${myJson["Temp"]}\u00B0C`;
                nowHumData .innerText = `${myJson["Hum"]}%`;
            }
        } catch(e) {
            console.log("Get Now DHT11 Data[Error]:", e);
        }
    });
}