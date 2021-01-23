let obj = {};
const master = ['PUBLICATION DATE', 'BIDDING DATE'];
let a = [...document.getElementsByClassName("lbl-licitacao")];
a.map(x =>
{
	let _ = x.innerText.split(':');
	if (master.includes(_[0].trim()))
	{
		obj[_[0].trim()] = _[1].trim()
	}
})


let objectValue = document.querySelector('p')
let text = objectValue.innerText

obj["OBJECT"] = text



let link = [...document.getElementsByClassName("field field--name-field-icone field--type-image field--label-hidden field__item")].map(x =>
{
	if (x.getElementsByTagName('a')[0] && x.getElementsByTagName('a')[0].href)
	{
		return (x.getElementsByTagName('a')[0].href)
	}
})
obj["LINK"] = link[0];



/***				OUTPUT                        *****
{
  "PUBLICATION DATE": "10/30/2020",
  "BIDDING DATE": "10/30/2020",
  "OBJECT": "Price Registration for a period of 12 months, for the purchase of galvanized clamps.",
  "LINK": "http://portal6.pbh.gov.br/dom/iniciaEdicao.do?method=DetalheArtigo&pk=1235349"
}

*/
