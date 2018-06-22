import React, { Component } from 'react';
import { Link } from '@reach/router';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

class Home extends Component {
  render() {
    const BlockDiv = styled.div`
      height: 1000px;
      border-radius: 6px;
      box-shadow: 0 0 8px #999;
    `;
    return (
      <div style={{ padding: 16 }}>
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
                <Button size="small">开始</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
