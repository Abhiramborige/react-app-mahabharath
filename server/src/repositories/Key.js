module.exports = function ({ Key }) {
  return Object.freeze({
    insert,
    update,
    findByKey,
    deleteByKey,
  })

  async function insert({ userId, key, name, opaque }) {
    const insertedKey = await Key.create({ userId, key, name, opaque })
    return insertedKey
  }
  async function update({ id, userId, key, name, opaque }) {
    const updatedKey = await Key.findOneAndUpdate({ _id: id, userId, opaque }, { key, name }, { new: true })
    console.log(updatedKey)
    return updatedKey ? updatedKey : null
  }
  async function findByKey(key) {
    const foundKey = await Key.findOne({ key })
    return foundKey ? foundKey : null
  }
  async function deleteByKey({ userId, key }) {
    const { deletedCount } = await Key.deleteOne({ userId, key });
    return deletedCount > 0 ? true : false
  }
}
