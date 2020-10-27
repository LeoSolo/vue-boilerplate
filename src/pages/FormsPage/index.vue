<template>
  <div class="hello container">
    <h2>Forms Test</h2>

    <tabs :titles="['First', 'Second', 'Third']">
      <div slot="tab-0">
        <h4>Первая вкладка</h4>
        <p>Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1</p>
        <p>Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1</p>
        <p>Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1, Тестовый текст 1</p>
      </div>

      <div slot="tab-1">
        <h4>Вторая вкладка</h4>
        <p>Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2</p>
        <p>Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2</p>
        <p>Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2, Тестовый текст 2</p>
      </div>

      <div slot="tab-2">
        <h4>Третья вкладка</h4>
        <p>Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3</p>
        <p>Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3</p>
        <p>Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3, Тестовый текст 3</p>
      </div>
    </tabs>

    <CFieldset legend="Тест кастомной формы">

      <CForm
        slot="content"
        :on-submit="onSubmit"
        formName="testForm"
        :fields="['RAILBOOKID', 'WAYRAIL', 'TEST', 'TEST_INPUT']"
      />

    </CFieldset>

  </div>
</template>

<script>
import Dropdown from '../../components/Dropdown/index'
import CInput from '../../components/CInput/index'
import CTextarea from '../../components/CTextarea/index'
import CFieldset from '../../components/CFieldset/index'
import Tabs from '../../components/Tabs/index'
import CForm from '../../components/CForm/index'

export default {
  name: 'FormsPage',
  components: {CForm, Tabs, CFieldset, CTextarea, CInput, Dropdown},
  data () {
    return {}
  },
  methods: {
    onSubmit: function () {}
  }
}
</script>

<style scoped lang="scss">
</style>
