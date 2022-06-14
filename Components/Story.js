export default function Story(story) {
  return `
     <div>
        <div class= 'story'>
            <span>${story.index || ''}</span>
            <span>▲</span>
            <a href='${story.url}'>${story.title}</a>
            <span>(${story.domain})</span>
        </div>         
        <div>
            <div class='gray'>
            ${story.points} points by ${story.user} ${story.time_ago} | 
            <a href='#/item?id=${story.id}'>${story.comments_count} comments</a> |
            <span class='favorite' data-story='${JSON.stringify(story)}'>
            <img class='heart' src=''>
             ${story.isFavorite ? '♥ Remove from Favorites' : '♡ Add To Favorites'}
            </span>
            </div>
        </div>
     </div>`;
}
