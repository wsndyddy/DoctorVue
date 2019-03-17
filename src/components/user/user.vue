<template>
  <Card :title="$t('user.title')" icon="ios-film-outline">
    <i-table border height="600" highlight-row ref="usersTable" :columns="columns" :data="usersList">
    </i-table>
    <Divider />
    <Row>
      <i-col span="20">
        <i-button type="primary" icon="md-person-add" @click="modal_create_new = true">{{$t('user.new')}}</i-button>
        <Modal v-model="modal_create_new"
               :title="$t('user.new')"
               :ok-text="$t('user.ok')"
               :cancel-text="$t('user.cancel')"
               @on-ok="createNew">
          <CreateNew ></CreateNew>
        </Modal>
        <i-button type="primary" icon="md-person-add" @click="modal_change_pwd = true">{{$t('user.change_pwd')}}</i-button>
        <Modal v-model="modal_change_pwd"
               :title="$t('user.change_pwd')"
               :ok-text="$t('user.ok')"
               :cancel-text="$t('user.cancel')"
               @on-ok="changePwd">
          <ChangePwd></ChangePwd>
        </Modal>
        <i-button type="primary" icon="md-person-add" @click="modal_modify = true">{{$t('user.modify')}}</i-button>
        <Modal v-model="modal_modify"
               :title="$t('user.modify')"
               :ok-text="$t('user.ok')"
               :cancel-text="$t('user.cancel')"
               @on-ok="modify">
          <Modify></Modify>
        </Modal>
        <i-button type="warning" icon="md-person-add" @click="modal_delete = true">{{$t('user.delete')}}</i-button>
        <Modal v-model="modal_delete"
               :title="$t('user.delete')"
               :ok-text="$t('user.ok')"
               :cancel-text="$t('user.cancel')"
               @on-ok="deleteUser">
          {{$t('user.confirm_delete')}}
        </Modal>
      </i-col>
      <i-col span="4">
        {{$t('user.show_all')}}
        <i-switch v-model="switch_show_all" @on-change="change"></i-switch>
      </i-col>
    </Row>
  </Card>
</template>

<script>
import { getAllUser } from '@/api/user'
import CreateNew from './components/create_new'
import ChangePwd from './components/change_pwd'
import Modify from './components/modify'
export default {
  name: 'User',
  components: {
    CreateNew,
    ChangePwd,
    Modify
  },
  data () {
    return {
      switch_show_all: false,
      modal_create_new: false,
      modal_change_pwd: false,
      modal_modify: false,
      modal_delete: false,
      columns: [
        {
          title: this.$t('user.name'),
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'md-person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: this.$t('user.true_name'),
          key: 'true_name'
        },
        {
          title: this.$t('user.phone'),
          key: 'phone'
        },
        {
          title: this.$t('user.login_time'),
          key: 'login_time'
        },
        {
          title: this.$t('user.login_count'),
          key: 'login_count'
        },
        {
          title: this.$t('user.status'),
          key: 'status'
        }
      ],
      usersList: [
      ]
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    },
    getUsers () {
      getAllUser({
        cmd: 'query_data',
        type: 'all',
        show_all: 'false'
      })
        .then((response) => {
          this.usersList = response.data
          console.log(this.usersList)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createNew () {
    },
    changePwd () {
    },
    modify () {
    },
    deleteUser () {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getUsers()
    })
  }
}
</script>

<style scoped>

</style>
