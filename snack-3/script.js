/* Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva. */

const broswer = {
    tab: ['facebook', 'youtube', 'gmail', 'google', 'instagram', 'ansa'],
    activeTab: 0
}

const social = ['facebook', 'youtube', 'intagram', 'tiktok', 'x']

const {tab} = broswer
console.log(tab)

tab.forEach((finestra, index) => {
    if (finestra == social.includes()){
        console.log('finestra da eliminare')
    }
})

