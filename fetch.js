console.log("About to fetch rainbow");

catchText()
  .then(textfile => {
    document.getElementById("textfile").innerText = textfile;
    console.log("yes");
  })
  .catch(err => {
    console.log("Error!");
    console.error(err);
  });

catchRainbow()
  .then(response => {
    console.log("YAY");
  })
  .catch(err => {
    console.log("Error!");
    console.error(err);
  });

async function catchRainbow() {
  const response = await fetch("rainbow.jpeg");
  const blob = await response.blob();
  document.getElementById("rainbow").src = URL.createObjectURL(blob);
}

async function catchText() {
  const responseText = await fetch("testTextFile.txt");
  return await responseText.text();
}
