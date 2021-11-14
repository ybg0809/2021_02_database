# 2021_02_databaseg

## 3주차 실습 실행 작업
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
-(SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
-(token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week3 폴더로 이동
    >cd week3
3. 콘솔창(powershell)에서 npm package 설치
    >npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
    const pool = mysql.createPOOl(
        process.env.JAWSDB_URL ?? {
            host: 'loccalhost'.
            user: 'root', //본인의 mysql user id
            database: 'tutorial,  본인의 만든   데이터 베이스 이름
            password: '57355945' //본인의 mysql password
            waitForConnections: true,
            connectionLimt: 10,
            queueLimt: 0
        }
    );
</code>
</pre>

5. 서버 실행(powershell에서) 후 확인
    -npm run start
    -브라우저를 켜서 주소창에 localhost:3000 입력

6. 기본 화면
    -localhost:3000으로 들어가면 기본 화면
    -(데이터베이스 설지이 된 경우) localhost:3000/users 로 들어가면 DB에 있는 값을 불러와서 출력

## 8주차 실습 실해 방법
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
-(SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
-(token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week8 폴더로 이동
    >cd week8
3. 콘솔창(powershell)에서 npm package 설치
    >npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

5. 서버 실행(powershell에서) 후 확인
    -npm run start
    -브라우저를 켜서 주소창에 localhost:3000 입력

##<span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

 _ **데이터베이스** 실습은 재미 ~~없어요~~있어요.

 ## 3주차 테이블 설명

1. 3주차 테이블 코드.
 <pre>
<code>
    create table student (
        studentnumber int,
        studentname char(16),
        studentgrade int,
        studenttime varchar(40),
        studentemail varchar(40).
        primary key (Studentnumber)
        );
</code>
</pre>

2. 테이블 EX)

학번|이름|점수|입학시간|이메일
---|---|---|---|---|
12161616|김유리|A|XXX@XXX|
12161617|김철수|B|YYY@YYY|
12161817|홍길동|C|ZZZ@ZZZ|



## 8주차 테이블 설명

1. 8주차 테이블 코드(직원과 부서에 관한 테이블)

<pre>
<code>
CREATE TABLE EMPLOYEE
( Fname           VARCHAR(10)   NOT NULL,
  Minit           CHAR,
  Lname           VARCHAR(20)      NOT NULL,
  Ssn             CHAR(9)          NOT NULL,
  Bdate           DATE,
  Address         VARCHAR(30),
  Sex             CHAR(1),
  Salary          DECIMAL(5),
  Super_ssn       CHAR(9),
  Dno             INT               NOT NULL,
PRIMARY KEY   (Ssn));
CREATE TABLE DEPARTMENT
( Dname           VARCHAR(15)       NOT NULL,
  Dnumber         INT               NOT NULL,
  Mgr_ssn         CHAR(9)           NOT NULL,
  Mgr_start_date  DATE,
PRIMARY KEY (Dnumber),
UNIQUE      (Dname),
FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn) );
</code>
</pre>


## 10주차 테이블

1. 테이블 코드 
<pre>
<code>
CREATE TABLE USER
( Id VARCHAR(20) NOT NULL,
 Password VARCHAR(20) NOT NULL,
 Role VARCHAR(5) NOT NULL,
 PRIMARY KEY (id));
CREATE TABLE DEPARTMENT
( Dname VARCHAR(15) NOT NULL,
  Dnumber INT NOT NULL,
PRIMARY KEY (Dnumber),
UNIQUE      (Dname));
</code>
</pre>

2. 테이블 예제


ID|PASSWORD|ROLE
---|---|---|
admin|admin1234|admin
test|test1234|users

Dname|Dnumber
---|---|
전기공학과|2
전자공학과|3
정보통신공학과|0
컴퓨터공학과|1






 