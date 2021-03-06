import * as React from 'react'
import { withTheme } from 'styled-components/macro'
import { Grid, AppBar, Toolbar } from '@mui/material'
import NavbarMessagesDropdown from './NavbarMessagesDropdown'
import NavbarLanguagesDropdown from './NavbarLanguagesDropdown'
import NavbarUserDropdown from './NavbarUserDropdown'

type NavbarProps = {
  theme: {}
  onDrawerToggle: React.MouseEventHandler<HTMLElement>
}

const Navbar: React.FC<NavbarProps> = ({ onDrawerToggle }) => {
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <NavbarMessagesDropdown />
              <NavbarLanguagesDropdown />
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default withTheme(Navbar)
