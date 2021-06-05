import styled from "styled-components";

export const StoryWrapper = styled.section`
    padding-top: 5px;
    margin-bottom: 20px;
    margin-top: 10px;
    border-bottom: 1px solid #cccc;

    &:first-of-type{
        border-top: 0px;
    }

    &:last-of-type{
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
`

export const StoryTitle = styled.h3`
    font-size: 18px;
    //line-height: 1.8;
    margin: 0;
    text-decoration: none;
    display:flex;
    align-items: center;
    a{
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }

    p{
        margin: 0;
    }
`

export const StoryMeta = styled.div`
    font-style: italic;
    margin-left: 15px;
    >span:not(:first-child):before{
        content:'';
        margin: 0 3px;
    }

    .story__meta-bold{
        font-weight: bold;
    }
`

export const StoryMetaElement = styled.span`
    font-weight: bold;
    font-size: 15px;
    margin-right: 0px;
    color: ${(props) => props.color || 'red'};

`