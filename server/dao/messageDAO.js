import { ObjectId } from "mongodb"
import messageSchema from "../schema/messageSchema"

export default class MessageDAO {
  // static chats
  // static messages

  // static async injectDB(conn) {
  //   if (this.chats && messageSchema) {
  //     return
  //   }

  //   try {
  //     this.chats = await conn.db(process.env.DB_NS).collection("chats", {
  //       writeConcern: { w: "majority" }
  //     })
  //     messageSchema = await conn.db(process.env.DB_NS).collection("messages", {
  //       writeConcern: { w: "majority" }
  //     })
  //   } catch (err) {
  //     console.error(`Failed to connect to DB in MessageDAO: ${err}`)
  //   }
  // }

  static async getMessages({filter={}, page=0, limit=10} = {}) {
    try {
      const cursor = await messageSchema.find(filter).sort({"timestamp": -1}).skip(page*limit).limit(limit)
      return cursor;
    } catch (err) {
      console.error(`Failed to retrieve chat messages from DB. ${err}`);
      return []
    }
  }

  static async getMessage(id) {
    try {
      return await messageSchema.findOne({ _id: ObjectId(id) })
    } catch (err) {
      console.error(`Failed to retrieve chat message from DB: ${err}`)
      return {}
    }
  }

  static async addMessage({chatId, type, sender, timestamp, content}) {
    try {
      const result = await messageSchema.create(
        {
          chatId: ObjectId(chatId),
          type: type,
          sender: sender,
          timestamp: new Date(timestamp),
          content: content
        }
      )

      return {success: true, id: result._id}
    } catch (err) {
      console.error(`Failed to add chat message to DB: ${chatId}. ${err}`)
      return { error: err }
    }
  }

  static async deleteMessages(filter) {
    try {
      if (!filter || (filter && !Object.keys(filter).length)) {
        throw Error("No filter provided. Cannot delete all documents.")
      }

      await messageSchema.deleteMany(
        filter
      )

      return { success: true }
    } catch (err) {
      console.error(`Failed to delete chat messages from DB. ${err}`)
      return { error: err }
    }
  }

  static async deleteMessage(id) {
    try {
      await messageSchema.deleteOne({
        _id: ObjectId(id)
      })

      return { success: true }
    } catch (err) {
      console.error(`Failed to delete chat message from DB. ${err}`)
      return { error: err }
    }
  }
}
