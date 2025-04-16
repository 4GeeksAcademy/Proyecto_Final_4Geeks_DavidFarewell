"""Init

Revision ID: 776e57621adf
Revises: 
Create Date: 2025-04-16 15:18:11.777091

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '776e57621adf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('achievement',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('icon_url', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('app_user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password_hash', sa.String(length=255), nullable=False),
    sa.Column('avatar_url', sa.String(length=255), nullable=True),
    sa.Column('level', sa.Integer(), nullable=True),
    sa.Column('xp_total', sa.Integer(), nullable=True),
    sa.Column('mood_actual', sa.String(length=100), nullable=True),
    sa.Column('objetivo_personal', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('level_frame',
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('frame_url', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('level')
    )
    op.create_table('mission',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=200), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('type', sa.String(length=20), nullable=True),
    sa.Column('category', sa.String(length=100), nullable=True),
    sa.Column('duration_minutes', sa.Integer(), nullable=True),
    sa.Column('xp_reward', sa.Integer(), nullable=True),
    sa.Column('content_url', sa.String(length=255), nullable=True),
    sa.Column('is_daily', sa.Boolean(), nullable=True),
    sa.Column('is_weekly', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('mission_id', sa.Integer(), nullable=True),
    sa.Column('added_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['mission_id'], ['mission.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mood_tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('keyword', sa.String(length=100), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('password_reset_token',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('token', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('stat',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('type', sa.String(length=20), nullable=True),
    sa.Column('xp_earned', sa.Integer(), nullable=True),
    sa.Column('missions_completed', sa.Integer(), nullable=True),
    sa.Column('minutes_invested', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_achievement',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('achievement_id', sa.Integer(), nullable=True),
    sa.Column('unlocked_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['achievement_id'], ['achievement.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_mission',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('mission_id', sa.Integer(), nullable=True),
    sa.Column('status', sa.String(length=20), nullable=True),
    sa.Column('accepted_at', sa.DateTime(), nullable=True),
    sa.Column('completed_at', sa.DateTime(), nullable=True),
    sa.Column('completion_percentage', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['mission_id'], ['mission.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['app_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_mission')
    op.drop_table('user_achievement')
    op.drop_table('stat')
    op.drop_table('password_reset_token')
    op.drop_table('mood_tag')
    op.drop_table('favorite')
    op.drop_table('mission')
    op.drop_table('level_frame')
    op.drop_table('app_user')
    op.drop_table('achievement')
    # ### end Alembic commands ###
