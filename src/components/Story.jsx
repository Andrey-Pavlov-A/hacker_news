import React, {useState, useEffect} from 'react'
import { getStory } from '../api/api'
import { StoryMeta, StoryTitle, StoryWrapper, StoryMetaElement } from '../Styles/StoryStyles'
import { mapTime } from '../utils/mapTime'

const Story = (props) => {
    //debugger
    const [story, setStory] = useState({})
    useEffect(() => {
        //debugger
        getStory(props.storyId).then((data)=> data && data.url && setStory(data))
    }, [])
    return (
        <StoryWrapper>
            <div>
                {story && story.url ? (
                    <div>
                        <div >
                            
                            <StoryTitle>
                                <p>{props.index + 1}.</p>
                                <a href={story.url}>{story.title}</a>
                            </StoryTitle>
                        </div>
                        <div >
                            <StoryMeta>
                                <StoryMetaElement>{story.score} points</StoryMetaElement>
                                <StoryMetaElement>by {story.by}</StoryMetaElement>
                                <StoryMetaElement>{mapTime(story.time)}</StoryMetaElement>
                            </StoryMeta>
                            
                        </div>
                    </div>
                    )
                : null
                }
            </div>
        </StoryWrapper>
    )
}

export default Story
