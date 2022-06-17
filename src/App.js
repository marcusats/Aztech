import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import HideAppBar from './Navbar'
import logo from './logo (1).png'
import appdemo from './image.png'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';



const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>

      <div className={styles.background} />
      

      <Parallax pages={5}
      style={{backgroundImage: url('stars', true)}}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center'

      }}>
        <HideAppBar/>
          <Box p={2}  position="absolute" top={200} >  
          <h1 className={styles.scrollText}>Enableling access to a better and new economy. </h1>
          </Box>
          
          <Box p={2}   position="absolute" top={350}> 
          <img alt="..." src={logo} style={{ ...alignCenter, justifyContent: 'center', height: "150px" }}></img> 
          </Box>                                                                            
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start'}}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <h4>We are creating a bridge between those who had been left out and a decentralized economy.
            </h4>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>

          <div className={`${styles.card} ${styles.parallax} `}>
          <img alt="..." src={appdemo} style={{ ...alignCenter, justifyContent: 'center', height: "750px" }}></img> 
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>

          <div className={`${styles.card1} ${styles.parallax} ${styles.blue}`}>
          <Box p={2}  position="absolute" top={200} >
          <h3>Try our product first!</h3>         
        </Box>
        <br/>
        
        <Box p={2}   position="absolute" top={350}>

        <TextField
          id="filled-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="example@aztech.com"
          helperText="Provide your email for updates!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </Box>
        </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

