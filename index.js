document.addEventListener('DOMContentLoaded', ()=>{
    let birth = document.getElementById('birth')
    let title = document.getElementById('title')
    let det = document.getElementById('det')
    let gender = document.getElementById('gender')
    let eye = document.getElementById('eye')
    let hair = document.getElementById('hair')
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')
    let nationality = document.getElementById('nationality')
    let occupation = document.getElementById('occupation')
    let pob = document.getElementById('pob')
    let race = document.getElementById('race')
    let reward = document.getElementById('reward')
    let possible = document.getElementById('possible')
    let public = document.getElementById('public')
    
    fetch('https://api.fbi.gov/wanted/v1/list')
    .then(res=>res.json())
    .then(arrays=>{
        // console.log(arrays)
        
        const arr = Object.entries(arrays).map(([name, obj]) => ({ name, ...obj }))
        console.log(arr)
        let array = arr[1]
        display(array)
        console.log(array)

    })
    function display(array){
        const arr1 = Object.entries(array).map(([name, obj]) => ({ name, ...obj }))
        console.log(arr1)
        // for(let elem=0;elem<array.length;elem++){
        for(let elem of arr1){
            let div = document.getElementById('titl')
            let li = document.createElement('li')
            let but = document.createElement('button')
            but.className = 'btn'
            li.className = 'lst'
            div.appendChild(but)
            but.appendChild(li)
            li.innerText = `${elem.title}`

            but.addEventListener('click',()=>{
                title.textContent=`Name: ${elem.title}`
                birth.innerHTML=`Date of Birth: ${elem.dates_of_birth_used}`
                gender.textContent=`Gender: ${elem.sex}`
                det.innerHTML=`Last Spotted: ${elem['details']}`
                eye.innerHTML=`Eye Color: ${elem['eye']}`
                hair.innerHTML=`Hair Color: ${elem['hair']}`
                weight.innerHTML=`Weight: ${elem['weight']}`
                height.innerHTML=`Height: ${elem['height']}`
                nationality.innerHTML=`Nationality: ${elem['nationality']}`
                occupation.innerHTML=`Occupation: ${elem['occupations']}`
                pob.innerHTML=`Place of Birth: ${elem['place_of_birth']}`
                race.innerHTML=`Race: ${elem['race']}`
                possible.innerHTML=`Possible Countries: ${elem['possible_countries']}`
                reward.innerHTML=`FBI Reward for Leads: ${elem['reward_text']}`
                public.innerHTML=`Date of Publication: ${elem['publication']}`



            })
        }

    }
})