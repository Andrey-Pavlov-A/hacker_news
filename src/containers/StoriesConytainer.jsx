import React, {useState, useEffect} from 'react'
import { getStoriesId, getStory } from '../api/api'
import Story from '../components/Story'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { StoriesContainerWrapper } from '../utils/StoriesConytainerStyles'

const StoriesConytainer = () => {

  const {count} = useInfiniteScroll()

const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoriesId().then(({data}) => setStoryIds(data))
    getStory(27164769).then(data => console.log(data))
  }, [])

  console.log(storyIds)
  return (
    <StoriesContainerWrapper>
      <h1>Hacker News Page</h1>
      {storyIds.slice(0, count).map((story, index) => <Story storyId={story} index={index}/>)}
    </StoriesContainerWrapper>
  );
}

export default StoriesConytainer
