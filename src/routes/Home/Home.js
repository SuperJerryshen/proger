import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  Grid,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core'
// import styled from 'styled-components'

import Card from '../../components/Card'
import ipc from '../../libs/ipc'

class Home extends Component {
  handleClick = (...params) => {
    console.log(params)
  }

  openGitlabProject = () => {
    ipc.send('create-window', {
      path: '/helper/gitlablogin',
      config: {
        width: 800,
        height: 600,
      },
    })
  }

  render() {
    return (
      <div style={{ padding: 32 }}>
        <Grid container spacing={16}>
          <Grid item sm={4}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  新建项目
                </Typography>
                <Typography color="textSecondary">
                  通过这种方式，让项目初始化更简单
                </Typography>
                <Typography component="p">选择指定的模板初始化项目</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">开始</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  导入本地项目
                </Typography>
                <Typography color="textSecondary">管理本地已建项目</Typography>
                <Typography component="p">添加后可查看项目详情</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">开始</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Gitlab项目
                </Typography>
                <Typography color="textSecondary">
                  查看Gitlab上存在的项目
                </Typography>
                <Typography component="p">可以下载Gitlab项目</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.openGitlabProject}>
                  开始
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home
