var div = document.createElement("div");
div.innerHTML = `<h1>Covid19</h1> <input type="text" for="teext" id="txt"> <button type="button" id="teext" onclick="foo()">Search</button>
<div id="active"></div> <div id="recover"></div> <div id="death"></div>`;
div.style.textAlign = "center";
document.body.append(div);

async function foo() {
  let cc = document.getElementById("txt").value;

  let res = await fetch(
    `https://api.covid19api.com/total/dayone/country/${cc}`
  );
  let res1 = await res.json();
  console.log(res1);
  let index = res1.length - 1;
  var result = res1[index].Active;
  var result2 = res1[index].Recovered;
  var result3 = res1[index].Deaths;
  console.log(result);
  console.log(result2);
  console.log(result3);
  document.getElementById("active").innerText = `Total Active Cases:${result}`;
  document.getElementById("recover").innerText = `Recovered Cases:${result2}`;
  document.getElementById("death").innerText = `Total Deaths:${result3}`;
}
