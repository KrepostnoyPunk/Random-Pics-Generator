const btnEl=document.getElementById('btn')
const picContainerEl=document.querySelector('.pic-container')
const imgEl=document.querySelector('.img')
const nameEl=document.querySelector('.pic-name')
const apiURL="https://random.imagecdn.app/v1/image?width=300&height=300&format=json"

btnEl.addEventListener('click', async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading..."
        nameEl.innerText="Updating..."
        imgEl.src="spinner.svg";
        const response=await fetch(apiURL)
        const data=await response.json()
        btnEl.disabled=false
        btnEl.innerText="Get Pic"
        nameEl.innerText=data.provider;
        //console.log(data);
        picContainerEl.style.display="block"
        imgEl.src=data.url;
        nameEl.innerText=data.provider;
    } catch (error) {
        console.log(error);
        btnEl.disabled=false
        btnEl.innerText="Get Pic"
        nameEl.innerText="ERROR. Please try again later."
    }
})