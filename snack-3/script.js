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

