function distFromAvarage(tab) {
    const sum = 0;
    for (let x of sum)
    {
        sum+=x;
    }

    let y=sum/tab.lenght;
    console.log(y);
    let tab2=[];
    for(let v of tab)
    {
        tab2.push(y-v);
    }
    console.log(tab2);
}

distFromAvarage([1,2,3,4,5,6,7]);