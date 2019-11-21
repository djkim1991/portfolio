package com.dongju.portfolio.domain.dto.portfolio.personalProject.chat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {
    private Long uid;
    private String roomName;
    private Integer maxMemberCount;
}
