import { createGlobalStyle } from 'styled-components'

const GlobalStyleComponent = createGlobalStyle`
    html,body{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        background: linear-gradient(180deg, rgba(9, 35, 175, 1) 0%, rgba(0, 0, 0, 1) 100%);
        color: white;
    }

        button {
            padding: 17px 40px;
            border-radius: 50px;
            cursor: pointer;
            border: 0;
            background-color: white;
            box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            font-size: 15px;
            transition: all 0.5s ease;
            }

            button:hover {
            letter-spacing: 3px;
            background-color: hsl(261deg 80% 48%);
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
            }

            button:active {
            letter-spacing: 3px;
            background-color: hsl(261deg 80% 48%);
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
            transform: translateY(10px);
            transition: 100ms;
            }

            
`

export default GlobalStyleComponent