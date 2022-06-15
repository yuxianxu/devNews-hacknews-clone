export default function Story(story) {
  return `
     <div class='story-container'>
        <span>${story.index || ''}.</span>
        <div >
                <div class= 'story'>
                    <a href='${story.url}' target="_blank" rel="noopener noreferrer">${story.title}</a>
                    <span>${story.domain ? `(${story.domain})` : ''}</span>
                </div> 
                <div class='gray'>
                    ${story.points} points by ${story.user} ${
    story.time_ago
  } | <a href='#/item?id=${story.id}' target="_blank" rel="noopener noreferrer">${story.comments_count} comments</a> |
                    <span class='favorite' data-story='${JSON.stringify(
                      story
                    )}'>
                    ${
                      story.isFavorite
                        ? '♥ Remove from Favorites'
                        : '♡ Add To Favorites'
                    }
                    </span>
                </div>
            </div>
     </div>`;
}
