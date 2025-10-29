import { Client, Account, Databases, Storage, Query, TablesDB } from "appwrite";

export const appwriteConfig = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
    databaseId: process.env.NEXT_PUBLIC_DATABASE_ID,
    dataId: process.env.NEXT_PUBLIC_DATA_ID

};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)


export const account = new Account(client);
export const databases = new Databases(client);
const tables = new TablesDB(client);


export async function getData() {
    const res = await tables.listRows({
      databaseId: appwriteConfig.databaseId,
      tableId:    appwriteConfig.dataId,            
      queries: [ Query.orderDesc("$createdAt") ],    
    });
  
    return res.rows;                                 
  }