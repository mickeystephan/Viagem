import * as SQLite from "expo-sqlite"
let dbInstance = null;
export  const initDatabase = async () =>{
    try {
    if (!dbInstance){
      dbInstance = await SQLite.openDatabaseAsync("auth.db");
      await dbInstance.execAsync(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT UNIQUE, password TEXT)"
      );

      console.log("Database and table created successfully");
    }
    return dbInstance;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
    
}

export const getDatabase = async () => {
  if (!dbInstance){
    return await initDatabase();
  }
  return dbInstance;
}

export const userOperation = {
  login:async (user, password) => {
    const db = await getDatabase();
    return await db.getFirstAsync(
      "SELECT * FROM users WHERE user = ? AND password = ?",
      [user, password]
    );
  },

  findByUser: async (user) => {
    const db = await getDatabase();
    return await db.getFirstAsync("SELECT * FROM users WHERE user = ?", [
      user,
    ]);
  },

  register: async (user, password) => {
    const db = await getDatabase();
    return await db.runAsync(
      "INSERT INTO users (user, password) VALUES (?, ?)",
      [user, password]
    );
  },
};


