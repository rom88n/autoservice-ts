// base
import * as React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { useRouter } from 'next/router'
import ROUTES from '../../config/routes'

// material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme: Theme) => (
    createStyles({
      root: {
        flexBasis: '280px',
        paddingRight: '.1rem',
        padding: '2rem 0'
      },
      listItem: {
        padding: 0,
        marginBottom: '.5rem',
        '& svg, span': {
          color: '#ffffff9e',
        }
      },
      activeRoute: {
        borderRight: `3px solid ${theme.palette.primary.main}`,
        '& svg, span': {
          color: theme.palette.primary.main
        }
      }
    })
  )
)

const config = [
  {
    title: 'Главная',
    icon: HomeIcon,
    route: ROUTES.DASHBOARD,
    active: true
  },
  {
    title: 'Drafts',
    icon: DraftsIcon,
    route: ROUTES.DRAFT,
  }
]

const AppSidebar = (): React.ReactElement => {
  const classes = useStyles()
  const router = useRouter()
  const activeRoute = _.get(router.pathname.split('/'), [1])

  const handleClick = (pathname: string) => () => router.replace({ pathname })

  return (
    <div className={classes.root}>
      <List component="nav" disablePadding>
        {config.map(item => (
          <ListItem
            button
            onClick={handleClick(item.route)}
            key={item.title}
            className={classNames(classes.listItem, { [classes.activeRoute]: activeRoute === item.route })}
          >
            <ListItemIcon>
              <item.icon/>
            </ListItemIcon>
            <ListItemText primary={item.title}/>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default AppSidebar
