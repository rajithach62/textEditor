import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  CardOne,
  HeadOne,
  InnerCardOne,
  Img,
  InnerCardTwo,
  ListContainer,
  ListItem,
  Button,
  Horizontal,
  TextArea,
} from './styledComponent'

class Text extends Component {
  state = {
    firstColor: false,
    secondColor: false,
    thirdColor: false,
    textVal: '',
  }

  colorChangeThree = () => {
    this.setState(prevState => ({firstColor: !prevState.firstColor}))
  }

  colorChangeTwo = () => {
    this.setState(prevState => ({secondColor: !prevState.secondColor}))
  }

  colorChangeOne = () => {
    this.setState(prevState => ({thirdColor: !prevState.thirdColor}))
  }

  textChange = event => {
    this.setState({textVal: event.target.value})
  }

  render() {
    const {firstColor, secondColor, thirdColor, textVal} = this.state
    console.log(firstColor)
    return (
      <BgContainer>
        <CardOne>
          <InnerCardOne>
            <HeadOne>Text Editor</HeadOne>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="img-1"
            />
          </InnerCardOne>
          <InnerCardTwo>
            <ListContainer>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.colorChangeOne}
                  c={thirdColor}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.colorChangeTwo}
                  c={secondColor}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.colorChangeThree}
                  c={firstColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ListContainer>
            <Horizontal />
            <TextArea
              rows="10"
              cols="20"
              onChange={this.textChange}
              a={firstColor}
              b={secondColor}
              c={thirdColor}
              value={textVal}
            >
              {textVal}
            </TextArea>
          </InnerCardTwo>
        </CardOne>
      </BgContainer>
    )
  }
}

export default Text
