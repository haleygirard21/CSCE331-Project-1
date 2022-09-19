document.querySelector('.header_flame').onclick = function fire_mode(){ //when fire symbol clicked, change css reference sheet
    document.getElementById('page_style').setAttribute("href", "fire.css");
}
document.querySelector('.header_water').onclick = function water_mode(){ //when water symbol clicked, change css reference sheet
    document.getElementById('page_style').setAttribute("href", "water.css");
}


document.querySelector('.uni_icon').onclick = function insta_link(){ //when university icon clicked, open new tab with link to a&m's page
    window.open("https://www.tamu.edu/", "tamu");
}
document.querySelector('.insta_icon').onclick = function insta_link(){ //when insta icon clicked, open new tab with link to insta page
    window.open("https://www.instagram.com/haleygirard21/", "insta");
}
document.querySelector('.linkedin_icon').onclick = function insta_link(){ //when linkedin icon clicked, open new tab with link to linkedin profile
    window.open("https://www.linkedin.com/in/haleyhgirard/", "linked in");
}
document.querySelector('.dna_icon').onclick = function insta_link(){ //when dna icon clicked, open new tab with link to ancestry results
    window.open("https://www.ancestry.com/dna/origins/share/e10cdde7-cde5-441c-8cb4-9e93d432382c", "ancestry results");
}
document.querySelector('.spotify_icon').onclick = function insta_link(){ //when spotify icon clicked, open new tab with link to spotify page
    window.open("https://open.spotify.com/user/rysolwolf?si=6c2e38c069bf4cd6", "spotify");
}
document.querySelector('.cat_icon').onclick = function insta_link(){ //when spotify icon clicked, open new tab with link to spotify page
    window.open("https://tamupaws.wixsite.com/paws/about-us", "paws");
}
