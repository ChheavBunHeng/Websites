const Toke = "6426844175:AAHLNzkiFlEWkBgeBMaBakCZb7jVFi92dt0";
const UserID = "5970063699";
const UserName = "@Chheav_BunHeng";
const Title = document.querySelector('.Title');
const Date = document.querySelector('.Date');
const Text = document.querySelector('textarea');
const BTN = document.querySelector("button");   

function Clear() {
    Title.value = "";
    Date.value = "";
    Text.value = "";
}

function JsonLocalStorage() {
    var Info = {
        Title: Title.value,
        Date: Date.value,
        Text: Text.value
    };
    var InfoJSON = JSON.stringify(Info);
    if (Title.value.toUpperCase() === "JSON") {
        localStorage.setItem("JSON", InfoJSON);
        var JsonButton = document.createElement("button");
        JsonButton.textContent = "Download";
        JsonButton.addEventListener("click", function() {
            var json = localStorage.getItem("JSON");
            var blob = new Blob([json], { type: "application/json" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "Info.json";
            a.click();
            URL.revokeObjectURL(url);
        });
        document.body.appendChild(JsonButton);
    }
}

BTN.addEventListener("click", function() {
    const messageText = `Title:${Title.value}\nDate:${Date.value}\n${Text.value}`;
    const url = `https://api.telegram.org/bot${Toke}/sendMessage?chat_id=${UserID}&text=${encodeURIComponent(messageText)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('Message sent successfully');
                JsonLocalStorage();
                Clear();
            } else {
                console.error('Failed to send message:', data.description);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
});
