function writeCards(names, event)
{
    let messages = [];
    for (let i = 0; i < names.length; i++)
    {
        debugger;
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return messages;
}

function countDown(int)
{
    while (int >= 0)
    {
        console.log(int);
        int--
    }
}