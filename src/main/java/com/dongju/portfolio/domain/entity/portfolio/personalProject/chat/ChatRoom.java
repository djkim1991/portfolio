package com.dongju.portfolio.domain.entity.portfolio.personalProject.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "chat_room")
@Access(AccessType.FIELD)
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoom implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "room_name")
    private String roomName;

    @Column(name = "max_member_count")
    private Integer maxMemberCount;
}
