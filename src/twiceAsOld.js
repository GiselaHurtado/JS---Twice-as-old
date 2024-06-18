function calculatorAgeTwice(ageDad, AgeSon) {
    const diference = ageDad - AgeSon;
    if (diference > AgeSon){
        return diference - AgeSon;
    } else {
        return AgeSon - diference;
    }
}

export { calculatorAgeTwice }