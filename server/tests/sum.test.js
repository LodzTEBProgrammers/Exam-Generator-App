const dodawanie = (pierwsza,druga) =>{
    return pierwsza + druga;
}


test("dodowanie",()=>{
expect(dodawanie(2,2)).toBe(5)
})

