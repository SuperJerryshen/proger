import React, { Component } from 'react'
import Page from '../../components/Page'
import { Grid, TextField, Button } from '@material-ui/core'
import { GITLAB_ACCESS_TOKEN } from '../../libs/storeConst'
import api from '../../api'
import { setItem } from '../../libs/store'

class GitlabLogin extends Component {
  /**
   * 组件状态
   */
  state = {
    account: '',
    password: '',
  }

  /**
   * 控制输入变化
   */
  handleInputChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    })
  }

  handleGitlabLogin = () => {
    const { account, password } = this.state
    api.gitlab
      .getToken({
        username: account,
        password,
      })
      .then(res => {
        setItem(GITLAB_ACCESS_TOKEN, res)
      })
  }

  handleClickCancel = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <Page title="Gitlab登录">
        <div
          style={{
            border: '1px solid #eee',
            borderRadius: 6,
            padding: 16,
            width: 400,
            margin: '140px auto',
            paddingBottom: '36px',
          }}
        >
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
            style={{ padding: '32px' }}
          >
            <Grid item xs={8}>
              <div style={{ textAlign: 'center' }}>
                <TextField
                  type="email"
                  label="账号/邮箱"
                  value={this.state.account}
                  onChange={this.handleInputChange.bind(this, 'account')}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  label="密码"
                  value={this.state.password}
                  onChange={this.handleInputChange.bind(this, 'password')}
                  style={{ width: '100%' }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={16}>
            <Grid item>
              <Button
                style={{
                  background:
                    'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                  color: '#fff',
                }}
                onClick={this.handleClickCancel}
              >
                取消
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  background:
                    'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                  color: '#fff',
                }}
                onClick={this.handleGitlabLogin}
              >
                登录
              </Button>
            </Grid>
          </Grid>
        </div>
      </Page>
    )
  }
}

export default GitlabLogin
