function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
   let tamp = ''
    //Tulis Code Jawaban Kamu Di Bawah ini
    for(let i=0; i<str.length; i++){
            tamp+= str[i].toLowerCase()
    }console.log(tamp.match(/a/g))
   
   }
   
   panggilRegexp()
   
   