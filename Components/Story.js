export default function Story({
  index,
  url,
  domain,
  title,
  points,
  user,
  time_ago,
  id,
  comments_count,
}) {
  return `
     <div>
        <div class= 'story'>
            <span>${index}</span>
            <span>▲</span>
            <a href='${url}'>${title}</a>
            <span>(${domain})</span>
        </div>         
        <div>
            <div class='gray'>
            ${points} points by ${user} ${time_ago} | 
            <a href='#/item?id=${id}'>${comments_count} comments</a> |
            <span class='favorite'>
            <img class='heart' src=''>
            ♥ Add To Favorites
            </span>
            </div>
        </div>
     </div>`;
}
