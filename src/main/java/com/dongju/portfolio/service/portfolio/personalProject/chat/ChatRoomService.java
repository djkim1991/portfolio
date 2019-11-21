package com.dongju.portfolio.service.portfolio.personalProject.chat;

import com.dongju.portfolio.domain.dto.portfolio.personalProject.chat.ChatRoomDto;

import java.util.List;

public interface ChatRoomService {
    List<ChatRoomDto> list();
    ChatRoomDto findByUid(Long uid);
    Long count();
    void save(ChatRoomDto chatRoomDto);
    void deleteByUid(Long uid);
}
