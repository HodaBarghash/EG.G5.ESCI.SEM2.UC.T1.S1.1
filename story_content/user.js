function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5u2m75tnf2h":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzKJVZ1Q1IZYxwrjvInxZRQAcs6hfnBkrSqDAHC0u8EDxwdxbloj8sGXmXbvWJJWzQRXA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

