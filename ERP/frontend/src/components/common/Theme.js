import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
}

//Configuring color profile
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const themeWork = {
    components:{
        Text:{
            baseStyle:{},
            sizes:{},
            variants: {
                'nav-text': {
                    display :{
                        base:'none',
                        md:'inline'
                    }
                }
            }
        },
        Container:{
            variants:{
                'nav-item':{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column'
                }
            }
        }
    }
}

const navElements = {
    
}
const theme = extendTheme({ colors, config, ...themeWork })

export default theme