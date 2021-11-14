import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: '57355945',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
  getEmployee : async () => {
    const [rows] = await promisePool.query(`select * from user`);//유저의 모든 값을 부름
    
    return rows
  },
  getDepartment : async () => {
    const [rows] = await promisePool.query(`select * from department`);//department의 모든값을 부름

    return rows
  },

  getstudent : async () => {
    const [rows] = await promisePool.query(`select * student`);//내가만든 테이블

    return rows
  },
}

// delete query
export const deleteSql = {
  // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    deleteDepartment : async (data) =>{
      console.log('deleteSql.deleteDepartment:', data.Dnumber);// data.Dnmuber을 지움
    const sql = `delete from department where Dnumber=${data.Dnumber}`;//department 테이블의 Dnumber값을 지움
      await promisePool.query(sql);
  },

  
  
} 
