package com.dongju.portfolio.domain.repositories.portfolio.personalProject.chat;

import com.dongju.portfolio.domain.entity.portfolio.personalProject.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
}
