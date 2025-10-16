export function switchTheme(){

    const themeSwitch = document.getElementById("themeSwitch");

    themeSwitch.addEventListener("change", toggleTheme);

    function toggleTheme(){
       
       const currentTheme = document.documentElement.getAttribute("data-theme");

       let newTheme;
       if(currentTheme === "dark"){
        newTheme = "light";
       }else{
        newTheme = "dark";
       }
       setTheme(newTheme);
    }

    function setTheme(theme){
        document.documentElement.setAttribute("data-theme",theme);
    }
}