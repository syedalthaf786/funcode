window.onload = function () {
    let element = document.getElementById('quote');
    const quote = [
        'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
        'Loved you yesterday, love you still, always have, always will.',
        'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
        'I love you not only for what you are, but for what I am when I am with you.',
        'I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.',
        'The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.',
        'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.',
        'I’ll be loving you, always with a love that’s true',
        'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
        'I need you like a heart needs a beat.',
        'When I say I love you more, I don’t mean I love you more than you love me.',
        ' I mean I love you more than the bad days ahead of us, I love you more than any fight we will ever have. I love you more than the distance between us', 'I love you more than any obstacle that could try and come between us. I love you the most.'
    ];
    setInterval(() => {
        let randomQuote = Math.floor(Math.random() * quote.length)
        element.innerHTML = quote[randomQuote];
    }, 2000);
}