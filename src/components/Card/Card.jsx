import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsChat } from 'react-icons/bs';

// function Card({
//   id,
//   username,
//   profile_img,
//   top_detail,
//   bottom_detail,
//   img,
//   residence,
//   size,
//   space,
//   viewCount,
//   style,
// })
function Card({
  posting_id,
  like_count,
  user_name,
  user_image,
  image_url,
  content,
  comment_count,
}) {
  const navigate = useNavigate();

  function goToDetail(id) {
    navigate(`/contents/${id}`);
  }

  return (
    <Container>
      <Article>
        <Head>
          {/* <Title>{username}</Title> 기존 mock data */}
          <Title>{user_name}</Title>
          <div>
            <img src={user_image} />
          </div>
          {/* <ProfileDesc>{top_detail}</ProfileDesc> mock data */}
        </Head>

        {/* <Img alt="product_image" src={img[0]} onClick={() => goToDetail()} /> */}
        <div>
          <Img
            alt="목데이터에서 기존에 사진 받던부분 대체"
            src={image_url}
            onClick={() => goToDetail()}
          />
        </div>
      </Article>

      <IconList>
        <AiOutlineHeart>
          <LikeCount>{like_count}</LikeCount>
        </AiOutlineHeart>
        <BsBookmark />
        <BsChat>
          <Content>{content}</Content>
        </BsChat>
      </IconList>

      <CommentCount>{comment_count}</CommentCount>
      <Content>{content}</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: space-between;
  flex-flow: column wrap;
`;

const Article = styled.p`
  width: 250px;
  height: 300px;
  min-height: 16px;
  margin: 0 3px 40px 0;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px 5px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const ProfileDesc = styled.p`
  font-size: 13px;
  color: #bfbbbb;
  line-height: 28px;
`;

const ProfilePhoto = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

const Img = styled.img`
  display: grid;
  width: 230px;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  align-self: center;
`;

const IconList = styled.aside`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -25px;
  font-size: 25px;
`;

const LikeCount = styled.span`
  font-size: 14px;
`;

const CommentCount = styled.p`
  font-size: 14px;
`;

const Content = styled.p``;

export default Card;
