const BookInfo = (book) => {
let html = `
<div id="bookInfo" class="book__details bg-black p-4 w-1.5/5 top-80 ml-5 mx-auto 
flex flex-row text-center text-white">
    <img class ""border-2 border-white" src="${book.coverImage}" alt="bild saknas för denna bok"width="200" height="130" >
    <ul> 
    <p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Release date: ${book.releaseDate}</p>
    </ul>
</div>
`;

return html;
};