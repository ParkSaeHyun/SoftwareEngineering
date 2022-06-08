package com.oncloth.onclothproject.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Commit
class TrashbinServiceTest {
    @Autowired
    TrashbinService service;
    @Test
    void trashbinRead() {
        service.trashbinRead();

    }

    @Test
    void trashbinRemove() {
        service.trashbinRemove(2L);
    }

    @Test
    void trashbinRestore() {
        service.trashbinRestore(3L);
    }
}