const { Integer, Password, Checkbox, Relationship, Text } = require('@keystonejs/fields');

const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin)
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false
  }
  return { id: user.id }
}
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth)
  const isOwner = access.userOwnsItem(auth)
  return isAdmin ? isAdmin : isOwner
}

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner }

const User = {
  fields: {
    name: { type: Text, isRequired: true, label: 'Имя' },
    email: { type: Text, isUnique: true, isRequired: true, label: 'Email' },
    isAdmin: { type: Checkbox, label: 'Админ' },
    password: { type: Password, isRequired: true, label: 'Пароль' }
  },
  access: {
    read: true,
    update: true,
    create: true,
    delete: true,
    auth: true
  },
  label: 'User',
  labelResolver: item => item.email
}

module.exports = User
