<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-center">
    <Button @click="onConfirm()" :label="text" outlined></Button>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
import { ConfirmBtn } from '@/type'
import { router } from '@/router'

const confirm = useConfirm()
const toast = useToast()

const onConfirm = () => {
  confirm.require({
    message: props.message,
    header: props.header,
    icon: props.icon,
    rejectProps: {
      label: 'Cancel',
      outlined: true,
      icon: 'pi pi-times-circle',
      severity: props.rejectServerity,
    },
    acceptProps: {
      label: 'Comfirm',
      outlined: false,
      icon: 'pi pi-check-circle',
      severity: confirmType,
    },
    accept: () => {
      toast.add({
        severity: 'success',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      })
      setTimeout(() => {
        emit('click', confirmed())
      }, 2000)
    },
    reject: () => {
      toast.add({
        severity: 'warn',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: () => "Ok"
  },
  header: {
    type: String,
    required: false,
    default: () => "Confirmation"
  },
  message: {
    type: String,
    required: false,
    default: () => ""
  },
  icon: {
    type: String,
    required: false,
    default: () => "pi pi-info-circle"
  },
  acceptServerity: {
    type: String,
    required: false,
    default: () => "success"
  },
  rejectServerity: {
    type: String,
    required: false,
    default: () => "secondary"
  },
  success: {
    type: Boolean,
    required: false,
  },
  warn: {
    type: Boolean,
    required: false,
  },
  contrast: {
    type: Boolean,
    required: false,
  },
  info: {
    type: Boolean,
    required: false,
  },
  secondary: {
    type: Boolean,
    required: false,
  },
  afterConfirm: {
    type: Object,
    required: false,
    default: () => router.currentRoute.value
  },
})
const emit = defineEmits(['click'])

/**
 * @function `action` after `user` confirmed 🚀
 */
const confirmed = () => router.push(props.afterConfirm)

const confirmType: ConfirmBtn["confirmType"] = (
  props.contrast ? "contrast"
    : props.info ? "info"
      : props.secondary ? "secondary"
        : "success"
)
</script>
