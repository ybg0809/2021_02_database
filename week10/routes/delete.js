// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {
    const department  = await selectSql.getDepartment();
    res.render('delete', {
        title: "삭제 기능", //이름 삭제기능
        department //테이블 department 이름
    })
});

// 기존의 입력 값 불러오기
router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);
    const data={
        Dnumber: req.body.delBtn,//data는 dnumber값
    };

    await deleteSql.deleteDepartment(data);//department 데이터 값

    res.redirect('/delte'); 
});


module.exports = router;